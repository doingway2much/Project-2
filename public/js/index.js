// Get references to page elements
var buddyFirstNmae = $("#buddy-firstName");
var buddyLastName = $("#buddy-lastName");
var buddyEmail = $("#buddy-email");
var newInterest = $("#new-interest");
var InterestArr = [];
var submitBtn = $("#submit");
// var buddyList = $("#buddy-list");
var adminList = $("#admin-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveBuddy: function(buddy) {
    console.log("This is saveBuddy");
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/buddies",
      data: JSON.stringify(buddy)
    });
  },
  getBuddies: function() {
    return $.ajax({
      url: "api/buddies",
      type: "GET"
    });
  },
  deleteBuddy: function(id) {
    return $.ajax({
      url: "api/buddies/" + id,
      type: "DELETE"
    });
  },
  getInterests: function() {
    return $.ajax({
      url: "api/interests",
      type: "GET"
    });
  },
  saveNewInterest: function(interest) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/interests",
      data: JSON.stringify(interest)
    });
  }
};

// handleFormSubmit is called whenever we submit a new buddy
// Save the new buddy to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var buddy = {
    firstName: buddyFirstNmae.val().trim(),
    lastName: buddyLastName.val().trim(),
    email: buddyEmail.val().trim(),
    interests: InterestArr
  };

  var interest = {
    name: newInterest.val().trim()
  };

  $.each($("input[name='interests']:checked"), function() {
    InterestArr.push($(this).val());
    console.log(InterestArr);
  });

  if (interest.name.length > 0) {
    InterestArr.push(interest.name);
  }

  console.log("InterestArr: ", InterestArr);
  console.log(interest);

  if (
    !(
      buddy.firstName &&
      buddy.lastName &&
      buddy.email &&
      InterestArr.length > 0
    )
  ) {
    alert(
      "You must enter a buddy first name, last name, email, and at least one interest!"
    );
    return;
  }

  if (interest.name.length > 0) {
    API.saveNewInterest(interest).then(function() {
      API.saveBuddy(buddy);
    });
  } else {
    API.saveBuddy(buddy).then(function() {
      // window.location.pathname = "/all";
    });
  }
};

// handleDeleteBtnClick is called when an buddy's delete button is clicked
// Remove the buddy from the db and refresh the list
var handleDeleteBtnClick = function() {
  console.log("Delete button clicked");
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteBuddy(idToDelete).then(function() {
    location.reload();
  });
};

// Add event listeners to the submit and delete buttons
submitBtn.on("click", handleFormSubmit);
adminList.on("click", "#admin-delete", handleDeleteBtnClick);
