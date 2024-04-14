import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tbody>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Avatar_icon_green.svg/768px-Avatar_icon_green.svg.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Sofiya Ansari</span>
          </td>
          <td className="widgetLgDate">2 Jan 2024</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Avatar_icon_green.svg/768px-Avatar_icon_green.svg.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Hiral Barot</span>
          </td>
          <td className="widgetLgDate">1 March 2024</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Avatar_icon_green.svg/768px-Avatar_icon_green.svg.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Alvin Parmar</span>
          </td>
          <td className="widgetLgDate">30 March 2023</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
       
        </tbody>
      </table>
    </div>
  );
}
