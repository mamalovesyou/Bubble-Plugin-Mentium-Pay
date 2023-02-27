function(instance, properties, context) {
  const config = {
    session: properties.session,
    environment: "sandbox",
    onSuccess: function (data) {
      console.log('Success!', data);
      instance.publishState("payment_id", data.payment.id);
      instance.publishState("gross_amount", data.payment.grossAmount)
      instance.publishState("net_amount", data.payment.netAmount)
      instance.publishState("status", data.payment.status)
      instance.publishState("created_at", data.payment.createdAt)
      instance.triggerEvent("onSuccess");
    },
    onError: function (data) {
      console.log('Error!');
        instance.publishState("error_type", data.type)
      	instance.triggerEvent("onError");
    },
    onExit: function () {
      console.log('Exit!');
      instance.triggerEvent("onExit");
    },
  };
   console.log("Mentium", window.MentiumPay)
  window.MentiumPay.open(config);
}