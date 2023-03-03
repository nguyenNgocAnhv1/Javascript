function Validator(options) {
    var selectorRule = {}
    function getParent(element) {
        while (element.parentElement) {
            if (element.parentElement.matches(".form-group")) {
                return element.parentElement
            }
            element = element.parentElement
        }
    }
    function validate(inputElement, rule) {
        var errorElement = getParent(inputElement).querySelector(options.errorClass)
        var rules = selectorRule[rule.selector]
        for (var i = 0; i < rules.length; i++) {
            switch (inputElement.type) {
                case "radio":
                case "checkbox":
                    errorMessage = rules[i](formElement.querySelector(rule.selector + ":checked"));

                    break
                default:
                    var errorMessage = rules[i](inputElement.value)

            }
            if (errorMessage) {
                break
            }
        }
        if (errorMessage) {

            errorElement.innerText = errorMessage
            getParent(inputElement).classList.add("invalid")

        } else {
            errorElement.innerText = ""
            getParent(inputElement).classList.remove("invalid")


        }

        return !errorMessage
    }
    // Get element from the validate form
    var formElement = document.querySelector(options.form)

    if (formElement) {
        // Prevent default
        formElement.onsubmit = function (e) {
            e.preventDefault();
            var isFormValid = true;
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector)
                var isvalid = validate(inputElement, rule)
                if (!isvalid) {
                    isFormValid = false
                }


            })



            if (isFormValid) {
                if (typeof options.onSubmit == "function") {
                    var enable = formElement.querySelectorAll("[name]:not([disabled])")
                    console.log(enable);

                    var formValues = Array.from(enable).reduce(function (value, input,) {

                        switch (input.type) {
                            case "radio":
                                return value = { ...value, [input.name]: formElement.querySelector("input[name='" + input.name + "']:checked").value }
                                break
                            case "checkbox":
                                // var CheckList = []
                                // var checkBox = formElement.querySelectorAll('input[type="checkbox"]') 
                                // for (var i = 0; i < checkBox.length; i++){
                                //     if (checkBox[i].checked){
                                //         CheckList.push(checkBox[i].value)
                                //     }else{
                                //         CheckList.push("")

                                //     }

                                // }
                                // return value = { ...value, [input.name]: CheckList }


                                if (!input.matches(":checked")) {
                                    return value
                                } else {
                                    if (!Array.isArray(value[input.name])) {
                                        value[input.name] = []
                                    }
                                    value[input.name].push(input.value)
                                    var sex = value[input.name]
                                    return value = { ...value, [input.name]: sex }

                                }
                                break
                            case "file":
                                return value = { ...value, [input.name]: input.files }
                                break



                            default:
                                return value = { ...value, [input.name]: input.value }
                        }

                    }, {})
                    console.log(formValues);
                }
            }

        }
        options.rules.forEach(function (rule) {
            // Get rule
            if (Array.isArray(selectorRule[rule.selector])) {
                selectorRule[rule.selector].push(rule.test)
            } else {
                selectorRule[rule.selector] = [rule.test]
            }
            var inputElement = formElement.querySelectorAll(rule.selector)
            Array.from(inputElement).forEach(function (inputElement) {
                if (inputElement) {
                    // onblur
                    inputElement.onblur = function () {
                        validate(inputElement, rule)
                    }
                    inputElement.oninput = function () {
                        var errorElement = getParent(inputElement).querySelector(options.errorClass)
                        errorElement.innerText = ""
                        getParent(inputElement).classList.remove("invalid")

                    }
                }
            })

        })
    }
}
// Set rule law
// If it is an error = > return a error message || undefined 
Validator.isRequired = function (selector, message) {
    return {
        selector,
        test(value) {
            return value ? undefined : message
        }
    }
}
Validator.isEmail = function (selector, message) {
    return {
        selector,
        test(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : message
        }
    }

}
Validator.requirePassword = function (selector, message) {
    return {
        selector,
        test(value) {
            var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
            return regex.test(value) ? undefined : message
        }
    }
}
Validator.isConfirmed = function (selector, getConfirmValue, message = "Warm value") {
    return {
        selector,
        test(value) {

            return value == getConfirmValue() ? undefined : message
        }
    }
}