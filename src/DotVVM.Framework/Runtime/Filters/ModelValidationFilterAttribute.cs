#nullable enable
using System.Linq;
using System.Threading.Tasks;
using DotVVM.Framework.Hosting;
using DotVVM.Framework.Utils;
using DotVVM.Framework.ViewModel.Validation;
using Microsoft.Extensions.DependencyInjection;

namespace DotVVM.Framework.Runtime.Filters
{
    /// <summary>
    /// Runs the model validation and returns the errors if the viewModel is not valid.
    /// </summary>
    public class ModelValidationFilterAttribute : ActionFilterAttribute
    {
        /// <inheritdoc />
        protected internal override Task OnCommandExecutingAsync(IDotvvmRequestContext context, ActionInfo actionInfo)
        {
            if (!string.IsNullOrEmpty(context.ModelState.ValidationTargetPath))
            {
                var validator = context.Services.GetRequiredService<IViewModelValidator>();
                var errors = validator.ValidateViewModel(context.ModelState.ValidationTarget).ToList();
                if (errors.Any() || context.ModelState.Errors.Any())
                {
                    var modelStateDecorator = context.Services.GetRequiredService<IModelStateDecorator>();
                    modelStateDecorator.Decorate(context.ModelState, context.ViewModel, errors);
                }

                context.FailOnInvalidModelState();
            }

            return TaskUtils.GetCompletedTask();
        }
    } 
}
