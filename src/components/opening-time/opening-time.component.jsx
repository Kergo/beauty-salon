import React from 'react';
import './opening-time.styles.scss';
const OpeningTime = () => {
  return (
    <div className="opening-time">
      <h3>Opening Time</h3>
      <table>
        <tbody>
          <tr>
            <td>Monday</td>
            <td>09:00 - 20:00</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>09:00 - 20:00</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>09:00 - 20:00</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>09:00 - 20:00</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>09:00 - 20:00</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>10:00 - 19:00</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>11:00 - 18:00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OpeningTime;
