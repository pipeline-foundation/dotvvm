/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v10.0.6306.29915 (NJsonSchema v8.30.6304.31883) (http://NSwag.org)
// </auto-generated>
//----------------------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CompaniesClient = (function () {
    function CompaniesClient(baseUrl, http) {
        this.jsonParseReviver = undefined;
        this.baseUrl = baseUrl ? baseUrl : "";
        this.http = http ? http : window;
    }
    CompaniesClient.prototype.get = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/Companies";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            }
        };
        return this.http.fetch(url_, options_).then(function (_response) {
            return _this.processGet(_response);
        });
    };
    CompaniesClient.prototype.processGet = function (_response) {
        var _this = this;
        var _status = _response.status;
        if (_status === 200) {
            return _response.text().then(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (var _i = 0, resultData200_1 = resultData200; _i < resultData200_1.length; _i++) {
                        var item = resultData200_1[_i];
                        result200.push(Company.fromJS(item));
                    }
                }
                return result200;
            });
        }
        else if (_status !== 200 && _status !== 204) {
            return _response.text().then(function (_responseText) {
                return throwException("An unexpected server error occurred.", _status, _responseText);
            });
        }
        return Promise.resolve(null);
    };
    return CompaniesClient;
}());
var OrdersClient = (function () {
    function OrdersClient(baseUrl, http) {
        this.jsonParseReviver = undefined;
        this.baseUrl = baseUrl ? baseUrl : "";
        this.http = http ? http : window;
    }
    OrdersClient.prototype.get = function (companyId, pageIndex, pageSize) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Orders/{companyId}?";
        if (companyId === undefined || companyId === null)
            throw new Error("The parameter 'companyId' must be defined.");
        url_ = url_.replace("{companyId}", encodeURIComponent("" + companyId));
        if (pageIndex === null)
            throw new Error("The parameter 'pageIndex' cannot be null.");
        else if (pageIndex !== undefined)
            url_ += "pageIndex=" + encodeURIComponent("" + pageIndex) + "&";
        if (pageSize === null)
            throw new Error("The parameter 'pageSize' cannot be null.");
        else if (pageSize !== undefined)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            }
        };
        return this.http.fetch(url_, options_).then(function (_response) {
            return _this.processGet(_response);
        });
    };
    OrdersClient.prototype.processGet = function (_response) {
        var _this = this;
        var _status = _response.status;
        if (_status === 200) {
            return _response.text().then(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (var _i = 0, resultData200_2 = resultData200; _i < resultData200_2.length; _i++) {
                        var item = resultData200_2[_i];
                        result200.push(Order.fromJS(item));
                    }
                }
                return result200;
            });
        }
        else if (_status !== 200 && _status !== 204) {
            return _response.text().then(function (_responseText) {
                return throwException("An unexpected server error occurred.", _status, _responseText);
            });
        }
        return Promise.resolve(null);
    };
    OrdersClient.prototype.getItem = function (orderId) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Orders/{orderId}";
        if (orderId === undefined || orderId === null)
            throw new Error("The parameter 'orderId' must be defined.");
        url_ = url_.replace("{orderId}", encodeURIComponent("" + orderId));
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            }
        };
        return this.http.fetch(url_, options_).then(function (_response) {
            return _this.processGetItem(_response);
        });
    };
    OrdersClient.prototype.processGetItem = function (_response) {
        var _this = this;
        var _status = _response.status;
        if (_status === 200) {
            return _response.text().then(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? Order.fromJS(resultData200) : null;
                return result200;
            });
        }
        else if (_status !== 200 && _status !== 204) {
            return _response.text().then(function (_responseText) {
                return throwException("An unexpected server error occurred.", _status, _responseText);
            });
        }
        return Promise.resolve(null);
    };
    OrdersClient.prototype.put = function (orderId, order) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Orders/{orderId}";
        if (orderId === undefined || orderId === null)
            throw new Error("The parameter 'orderId' must be defined.");
        url_ = url_.replace("{orderId}", encodeURIComponent("" + orderId));
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(order ? order.toJSON() : null);
        var options_ = {
            body: content_,
            method: "PUT",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        };
        return this.http.fetch(url_, options_).then(function (_response) {
            return _this.processPut(_response);
        });
    };
    OrdersClient.prototype.processPut = function (_response) {
        var _status = _response.status;
        if (_status === 200) {
            return _response.blob();
        }
        else if (_status !== 200 && _status !== 204) {
            return _response.text().then(function (_responseText) {
                return throwException("An unexpected server error occurred.", _status, _responseText);
            });
        }
        return Promise.resolve(null);
    };
    OrdersClient.prototype["delete"] = function (orderId) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Orders/{orderId}";
        if (orderId === undefined || orderId === null)
            throw new Error("The parameter 'orderId' must be defined.");
        url_ = url_.replace("{orderId}", encodeURIComponent("" + orderId));
        url_ = url_.replace(/[?&]$/, "");
        var content_ = "";
        var options_ = {
            body: content_,
            method: "DELETE",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                "Accept": "application/json; charset=UTF-8"
            }
        };
        return this.http.fetch(url_, options_).then(function (_response) {
            return _this.processDelete(_response);
        });
    };
    OrdersClient.prototype.processDelete = function (_response) {
        var _status = _response.status;
        if (_status === 204) {
            return _response.text().then(function (_responseText) {
                return null;
            });
        }
        else if (_status !== 200 && _status !== 204) {
            return _response.text().then(function (_responseText) {
                return throwException("An unexpected server error occurred.", _status, _responseText);
            });
        }
        return Promise.resolve(null);
    };
    OrdersClient.prototype.post = function (order) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Orders";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(order ? order.toJSON() : null);
        var options_ = {
            body: content_,
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        };
        return this.http.fetch(url_, options_).then(function (_response) {
            return _this.processPost(_response);
        });
    };
    OrdersClient.prototype.processPost = function (_response) {
        var _status = _response.status;
        if (_status === 200) {
            return _response.blob();
        }
        else if (_status !== 200 && _status !== 204) {
            return _response.text().then(function (_responseText) {
                return throwException("An unexpected server error occurred.", _status, _responseText);
            });
        }
        return Promise.resolve(null);
    };
    return OrdersClient;
}());
var Company = (function () {
    function Company(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    Company.prototype.init = function (data) {
        if (data) {
            this.id = data["Id"];
            this.name = data["Name"];
        }
    };
    Company.fromJS = function (data) {
        var result = new Company();
        result.init(data);
        return result;
    };
    Company.prototype.toJSON = function (data) {
        data = data ? data : {};
        data["Id"] = this.id;
        data["Name"] = this.name;
        return data;
    };
    return Company;
}());
var Order = (function () {
    function Order(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    Order.prototype.init = function (data) {
        if (data) {
            this.id = data["Id"];
            this.number = data["Number"];
            this.date = data["Date"] ? new Date(data["Date"].toString()) : undefined;
            this.companyId = data["CompanyId"];
            if (data["OrderItems"] && data["OrderItems"].constructor === Array) {
                this.orderItems = [];
                for (var _i = 0, _a = data["OrderItems"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.orderItems.push(OrderItem.fromJS(item));
                }
            }
        }
    };
    Order.fromJS = function (data) {
        var result = new Order();
        result.init(data);
        return result;
    };
    Order.prototype.toJSON = function (data) {
        data = data ? data : {};
        data["Id"] = this.id;
        data["Number"] = this.number;
        data["Date"] = this.date ? this.date.toISOString() : undefined;
        data["CompanyId"] = this.companyId;
        if (this.orderItems && this.orderItems.constructor === Array) {
            data["OrderItems"] = [];
            for (var _i = 0, _a = this.orderItems; _i < _a.length; _i++) {
                var item = _a[_i];
                data["OrderItems"].push(item.toJSON());
            }
        }
        return data;
    };
    return Order;
}());
var OrderItem = (function () {
    function OrderItem(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    OrderItem.prototype.init = function (data) {
        if (data) {
            this.id = data["Id"];
            this.text = data["Text"];
            this.amount = data["Amount"];
            this.discount = data["Discount"];
            this.isOnStock = data["IsOnStock"];
        }
    };
    OrderItem.fromJS = function (data) {
        var result = new OrderItem();
        result.init(data);
        return result;
    };
    OrderItem.prototype.toJSON = function (data) {
        data = data ? data : {};
        data["Id"] = this.id;
        data["Text"] = this.text;
        data["Amount"] = this.amount;
        data["Discount"] = this.discount;
        data["IsOnStock"] = this.isOnStock;
        return data;
    };
    return OrderItem;
}());
var SwaggerException = (function (_super) {
    __extends(SwaggerException, _super);
    function SwaggerException(message, status, response, result) {
        var _this = _super.call(this) || this;
        _this.message = message;
        _this.status = status;
        _this.response = response;
        _this.result = result;
        return _this;
    }
    return SwaggerException;
}(Error));
function throwException(message, status, response, result) {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new SwaggerException(message, status, response, null);
}
