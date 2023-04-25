import { Star } from "../Star/Star";

export const Stars = ({ count }) => {
  if (count < 1 || count > 5 || isNaN(count)) {
    return;
  }

  const countRes = Array(count).fill().map((e, i) => i + 1);

  return (
    <>
      <ul class="card-body-stars u-clearfix">
        {
          countRes.map((item) => {
            return <Star />
          })
        }
      </ul >
    </>
  );
}
