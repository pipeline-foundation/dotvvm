﻿using System;
using System.Collections.Generic;
using System.Text;
using DotVVM.Samples.Tests.Base;
using DotVVM.Testing.Abstractions;
using Xunit;
using Xunit.Abstractions;
using Riganti.Selenium.DotVVM;
using Riganti.Selenium.Core;

namespace DotVVM.Samples.Tests.Feature
{
    public class CommandResultTests : AppSeleniumTest
    {
        public CommandResultTests(ITestOutputHelper output) : base(output)
        {
        }
        [Fact]
        public void SimpleExceptionFilterTest()
        {
            RunInAllBrowsers(browser => {
                browser.NavigateToUrl(SamplesRouteUrls.FeatureSamples_CommandResult_SimpleExceptionFilter);
                browser.WaitUntilDotvvmInited();

                var staticCommandButton = browser.First("staticCommand", SelectByDataUi);
                staticCommandButton.Click();

                browser.WaitFor(() => {
                    var resultSpan = browser.First("result", SelectByDataUi);
                    var customDataSpan = browser.First("customData", SelectByDataUi);
                    AssertUI.TextEquals(resultSpan, "Problem!");
                    AssertUI.TextEquals(customDataSpan, "Hello there");
                }, 8000);

                var clearButton = browser.First("clear", SelectByDataUi);
                clearButton.Click();

                var commandButton = browser.First("command", SelectByDataUi);
                commandButton.Click();
                browser.WaitFor(() => {
                    var resultSpan = browser.First("result", SelectByDataUi);
                    var customDataSpan = browser.First("customData", SelectByDataUi);
                    AssertUI.TextEquals(resultSpan, "Problem!");
                    AssertUI.TextEquals(customDataSpan, "Hello there");
                }, 8000);


            });
        }

    }
}
