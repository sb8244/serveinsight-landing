// Initialize Firebase
var config = {
  apiKey: "AIzaSyDIlE_QvLi48k_kPcqKB1V4tyuS3f7FheQ",
  authDomain: "serveinsight-landing-a3053.firebaseapp.com",
  databaseURL: "https://serveinsight-landing-a3053.firebaseio.com",
  storageBucket: "",
};
firebase.initializeApp(config);

jQuery("#email-form").submit(function(e) {
  e.preventDefault();
  var email = $(this).find("input[name='email']").val();

  var messageListRef = firebase.database().ref('beta_signups');
  var newMessageRef = messageListRef.push();
  newMessageRef.set({
    email: email,
    when: new Date()
  }, function() {
    jQuery("#email-form").addClass('hidden');
    jQuery("#after-email-form").removeClass('hidden');
  });
});
