import React, { useEffect, useState } from "react";

function App() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/notifications")
      .then((res) => res.json())
      .then((data) => setNotifications(data))
      .catch((err) => console.log(err));
  }, []);

  const getPriority = (type) => {
    if (type === "Placement") return 3;
    if (type === "Result") return 2;
    return 1;
  };

  const sortedNotifications = [...notifications].sort((a, b) => {
    return getPriority(b.Type) - getPriority(a.Type);
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Campus Notification System</h1>
      <h2>Priority Inbox (Top 10)</h2>

      {sortedNotifications.length === 0 ? (
        <p>Loading...</p>
      ) : (
        sortedNotifications.slice(0, 10).map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <p>
              <strong>Type:</strong> {item.Type}
            </p>

            <p>
              <strong>Message:</strong> {item.Message}
            </p>

            <p>
              <strong>Timestamp:</strong> {item.Timestamp}
            </p>

            <p>
              <strong>Priority:</strong> {getPriority(item.Type)}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;