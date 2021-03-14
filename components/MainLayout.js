export function MainLayout({ children }) {
  return (
    <>
      <div className="mainlayout">
        <div className="header-wrapper">
          <div className="header-logo">
            <img src="data:image/png;base64,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" />{" "}
          </div>
          <div className="header-label">
            <div className="header-label_1">
              <a href="/">HOME</a>
            </div>
            <div className="header-label_2">
              <a href="/aboutus">ABOUT US</a>
            </div>
          </div>
        </div>

        <main>{children}</main>
      </div>
      <style jsx>
        {`
          .header-wrapper {
            color: #3d3d3d;
            height: 150px;
            width: 100%;
            font-size: 28px;
            font-weight: 500;
            letter-spacing: 0.6px;
            font-family: "Rubik", sans-serif;
          }
          .header-label {
            display: flex;
            margin-left: 1515px;
            padding-top: 69.75px;
          }
          .header-label_2 {
            margin-left: 70px;
          }
        `}
      </style>
    </>
  );
}
