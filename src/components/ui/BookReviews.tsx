/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm } from "react-hook-form";
import { FiSend } from "react-icons/fi";
import {
  usePostAReviewMutation,
  useSingleReviewQuery,
} from "../../redux/feature/book/bookApi";
interface IProps {
  id: string;
}
export default function BookReviews({ id }: IProps) {
  const { register, handleSubmit, reset } = useForm();
  const [postReview, { isLoading: loading, isError, isSuccess }] =
    usePostAReviewMutation();

  const { data, isLoading } = useSingleReviewQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 20000,
  });
  if (isLoading) {
    return <div>Loading...........</div>;
  }

  const reviews = data?.data.reviews;
  const onSubmit = (data: { review: any }) => {
    const options = {
      id: id,
      data: { review: data.review },
    };
    void postReview(options);
    reset();
  };
  return (
    <div className="mt-10">
      <form
        className="flex gap-5 items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <textarea
          className="min-h-30 w-80 border p-2 rounded"
          {...register("review", { required: true })}
        />
        <button type="submit" className="rounded-full h-10 w-10 p-2 text-25">
          <FiSend />
        </button>
      </form>
      <div className="mt-10">
        {reviews.map((review, index) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            <p>{review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
