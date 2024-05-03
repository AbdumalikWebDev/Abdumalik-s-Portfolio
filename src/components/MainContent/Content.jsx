import "./Content.css";
export function Content() {
  return (
    <main className="main">
      <div className="main-container">
        <div className="main-title">
          <h1>
            Hi!
            <br />
            My Name is Abdumalik Bozorov
          </h1>
          <h6 className="job">Front-end Developer</h6>
        </div>
        <div className="main-image">
          <img
            src="https://yt3.googleusercontent.com/ytc/AGIKgqP12vJkTY96T5lDUvKkI8WtvMR151ItBCI_hbFy=s900-c-k-c0x00ffffff-no-rj"
            alt=""
          />
        </div>
      </div>
    </main>
  );
}
