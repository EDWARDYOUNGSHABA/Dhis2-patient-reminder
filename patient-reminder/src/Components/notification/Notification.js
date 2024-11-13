import React, { useState, useEffect } from 'react';
import notificationData from './Notification.json'; // Import notification data from JSON
import './Notification.css'; // Import styles for notifications

const Notification = ({ doctorName }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Validate that doctorName is provided
    if (!doctorName) {
      console.error('Doctor name is required to filter notifications.');
      return;
    }

    // Filter notifications specific to the doctor
    const filteredNotifications = notificationData.filter(
      (notification) => notification.doctor === doctorName
    );
    setNotifications(filteredNotifications);
  }, [doctorName]);

  // Function to determine the CSS class based on the notification type
  const getNotificationClass = (type) => {
    const classes = {
      info: 'info-notification',
      reminder: 'reminder-notification',
      confirmation: 'confirmation-notification',
      alert: 'alert-notification',
      missed: 'missed-notification',
    };
    return classes[type] || ''; // Return the appropriate class or an empty string
  };

  return (
    <div className="notifications-container">
      <h2 className="notifications-header">Doctor Notifications</h2>
      {/* Conditional rendering based on whether there are notifications */}
      {notifications.length === 0 ? (
        <p className="no-notifications">No new notifications at the moment.</p>
      ) : (
        notifications.map((notification) => (
          <div
            key={notification.id}
            className={`notification ${getNotificationClass(notification.type)}`}
          >
            <p className="notification-message">{notification.message}</p>
            <p className="notification-date">
              {new Date(notification.date).toLocaleString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Notification;
