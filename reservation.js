$("#arrival_date").datepicker({
  minDate: 0,
  maxDate: "+90d",
});

$("#policies").click(function () {
  $("#dialog").dialog({
    modal: true,
  });
});

$("#reservation_form").submit(function (event) {
  var isValid = true;

  var arrivalDate = $("#arrival_date").val().trim();
  if (arrivalDate == "") {
    $("#arrival_date").next().text("This field is required.");
    isValid = false;
  } else {
    $("#arrival_date").next().text("");
  }

  var nights = $("#nights").val().trim();
  if (nights == "") {
    $("#nights").next().text("This field is required.");
    isValid = false;
  } else if (isNaN(nights)) {
    $("#nights").next().text("This field must be numeric.");
    isValid = false;
  } else {
    $("#nights").next().text("");
  }

  var name = $("#name").val().trim();
  if (name == "") {
    $("#name").next().text("This field is required.");
    isValid = false;
  } else {
    $("#name").next().text("");
  }

  var email = $("#email").val();
  if (email == "") {
    $("#email").next().text("This field is required.");
    isValid = false;
  } else if (
    !/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/.test(email)
  ) {
    $("#email").next().text("Must be a valid email address.");
    isValid = false;
  } else {
    $("#email").next().text("");
  }

  var phone = $("#phone").val().trim();
  if (phone == "") {
    $("#phone").next().text("This field is required.");
    isValid = false;
  } else {
    $("#phone").next().text("");
  }

  if (!isValid) {
    event.preventDefault();
  }
});
