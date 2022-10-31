import "./carousel.css";

//TODO: Zakomponovat Parallax na automaticky scroll carouselu

export default function Carousel() {
  return (
    <div className="carouselWrapper">
      <div className="carouselLeft">
        <img
          src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421586205/goodnight-punpun-vol-1-9781421586205_hr.jpg"
          alt=""
        />
        <img
          src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421586250/goodnight-punpun-vol-6-9781421586250_hr.jpg"
          alt=""
        />
        <img
          src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421586205/goodnight-punpun-vol-1-9781421586205_hr.jpg"
          alt=""
        />
        <img
          src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421586250/goodnight-punpun-vol-6-9781421586250_hr.jpg"
          alt=""
        />
      </div>
      <div className="carouselRight">
        <img
          src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421586243/goodnight-punpun-vol-5-9781421586243_hr.jpg"
          alt=""
        />
        <img
          src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421586236/goodnight-punpun-vol-4-9781421586236_hr.jpg"
          alt=""
        />
        <img
          src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421586243/goodnight-punpun-vol-5-9781421586243_hr.jpg"
          alt=""
        />
        <img
          src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421586236/goodnight-punpun-vol-4-9781421586236_hr.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
