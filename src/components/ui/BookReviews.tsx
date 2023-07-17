/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { SubmitHandler, useForm } from "react-hook-form";
import { FiSend } from "react-icons/fi";
import {
  usePostAReviewMutation,
  useSingleReviewQuery,
} from "../../redux/feature/book/bookApi";

type IBookFormData = {
  review: any;
};
interface Props {
  id: string | undefined;
}
export default function BookReviews({ id }: Props) {
  const { register, handleSubmit, reset } = useForm<IBookFormData>();
  const [postReview, { isLoading: loading }] = usePostAReviewMutation();

  const { data, isLoading } = useSingleReviewQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 20000,
  });
  if (isLoading || loading) {
    return <div>Loading...........</div>;
  }

  const reviews = data?.data.reviews;
  const onSubmit: SubmitHandler<IBookFormData> = (data: { review: any }) => {
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
        {reviews.map((review: string, index: number) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            <p>{review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
