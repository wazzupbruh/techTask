import Calendar from "./Calendar";

export default function Content() {
  return (
    <div className="content-wrapper">
      <div className="content-label">
        <div className="content-label_1">
          CHOOSE THE DAY
          <br /> FOR THE MEETING
        </div>
        <div className="content-label_2">
          We encourage you to book your
          <br />
          appointment online.
          <br />
          This will save you time.
        </div>
      </div>
      <div className="content-calendar">
        <Calendar />
      </div>
    </div>
  );
}
