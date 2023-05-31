$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/FeatureFiles/ForgettenPassword.feature");
formatter.feature({
  "name": "To validate Forgetten Password functionality in fb",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Forgot"
    }
  ]
});
formatter.scenario({
  "name": "To validate Forgetten Password using invalid mobile number",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Forgot"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user have to be in fb login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_have_to_be_in_fb_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User have to click Forgetten password link",
  "keyword": "When "
});
formatter.match({
  "location": "ForgettenPwd.user_have_to_click_Forgetten_password_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To validate functionality using invalid mobile number and clich search button",
  "rows": [
    {
      "cells": [
        "9840304764",
        "Suriya1512",
        "suriya@123",
        "2434567"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ForgettenPwd.to_validate_functionality_using_invalid_mobile_number_and_clich_search_button(DataTable)"
});
formatter.result({
  "error_message": "java.lang.IndexOutOfBoundsException: index: 7, Size: 4\r\n\tat io.cucumber.datatable.DataTable.rangeCheck(DataTable.java:295)\r\n\tat io.cucumber.datatable.DataTable.access$800(DataTable.java:43)\r\n\tat io.cucumber.datatable.DataTable$ListView.get(DataTable.java:890)\r\n\tat io.cucumber.datatable.DataTable$ListView.get(DataTable.java:884)\r\n\tat org.steps.ForgettenPwd.to_validate_functionality_using_invalid_mobile_number_and_clich_search_button(ForgettenPwd.java:38)\r\n\tat ✽.To validate functionality using invalid mobile number and clich search button(file:src/test/resources/FeatureFiles/ForgettenPassword.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User have to be in identify the account page",
  "keyword": "Then "
});
formatter.match({
  "location": "ForgettenPwd.user_have_to_be_in_identify_the_account_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/FeatureFiles/Login.feature");
formatter.feature({
  "name": "to validate login functionality in facebook",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user have to be in fb login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_have_to_be_in_fb_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login using valid email and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "user have to maximize window",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_have_to_maximize_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user have to enter  valid email and invalid password",
  "rows": [
    {
      "cells": [
        "9840304764",
        "Suriya1512",
        "suriya@123",
        "2434567"
      ]
    },
    {
      "cells": [
        "9629096720",
        "VSP123",
        "Vijay@123",
        "456789"
      ]
    },
    {
      "cells": [
        "123456789",
        "Prabha123",
        "Prabha@1234",
        "67890"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_have_to_enter_valid_email_and_invalid_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user have to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_have_to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user have to be in password invaild page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_have_to_be_in_password_invaild_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user have to be in fb login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_have_to_be_in_fb_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login using invalid email and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@reg"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user have to enter  invalid email and invalid password",
  "rows": [
    {
      "cells": [
        "PhoneNumber",
        "1234567890"
      ]
    },
    {
      "cells": [
        "UserName",
        "suriya@123"
      ]
    },
    {
      "cells": [
        "Password",
        "Suriya@56789"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_have_to_enter_invalid_email_and_invalid_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user have to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_have_to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user have to be in password invaild page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_have_to_be_in_password_invaild_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user have to be in fb login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_have_to_be_in_fb_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login using invalid email and valid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@reg"
    }
  ]
});
formatter.step({
  "name": "user have to maximize window",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_have_to_maximize_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user have to enter  invalid email and valid password",
  "rows": [
    {
      "cells": [
        "Name",
        "Phonenno",
        "Email",
        "Password"
      ]
    },
    {
      "cells": [
        "Dev",
        "12345678",
        "suriya@123",
        "rtyui"
      ]
    },
    {
      "cells": [
        "Suriya",
        "345678567",
        "Riya@123",
        "hari"
      ]
    },
    {
      "cells": [
        "Prabha",
        "123456789",
        "Bala@456",
        "Vijay"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_have_to_enter_invalid_email_and_valid_password(DataTable)"
});
formatter.result({
  "error_message": "java.lang.IndexOutOfBoundsException: Index: 10, Size: 3\r\n\tat java.util.ArrayList.rangeCheck(Unknown Source)\r\n\tat java.util.ArrayList.get(Unknown Source)\r\n\tat java.util.Collections$UnmodifiableList.get(Unknown Source)\r\n\tat org.steps.LoginSteps.user_have_to_enter_invalid_email_and_valid_password(LoginSteps.java:80)\r\n\tat ✽.user have to enter  invalid email and valid password(file:src/test/resources/FeatureFiles/Login.feature:28)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user have to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_have_to_click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user have to be in password invaild page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_have_to_be_in_password_invaild_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});