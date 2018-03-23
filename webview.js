"use strict";

module.exports = Franz => {
  const getMessages = function getMessages() {
    const notifications = document.querySelectorAll('.notification--number');

    Franz.setBadge(0, notifications.length >= 1 ? 1 : 0);
  };

  Franz.loop(getMessages);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhd2svd2Vidmlldy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiRnJhbnoiLCJvcHRpb25zIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxPQUFPQyxPQUFQLEdBQWlCLENBQUNDLEtBQUQsRUFBUUMsT0FBUixLQUFvQixDQUFFLENBQXZDIiwiZmlsZSI6InRhd2svd2Vidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gKEZyYW56LCBvcHRpb25zKSA9PiB7fVxuIl19