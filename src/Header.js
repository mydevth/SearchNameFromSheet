const Header = () => {
  const appTitle1 = "ลำดับที่นั่งผู้เข้าร่วมงานมอบใบประกาศนียบัตร";
  const appTitle2 = "พิธีครูในใจศิษย์";
  const appTitle3 = "12 มกราคม 2567";

  return (
    <>
      <div className="logo">
        <img src="logo-r.png" alt="NBU Logo" />
      </div>

      <h3>{appTitle1}</h3>
      <h3>{appTitle2}</h3>
      <h3>{appTitle3}</h3>
    </>
  );
};
export default Header;
