interface Props {
  message: string;
}

export const ErrorMessage = ({ message }: Props) => {
  return (
    <div className="bg-red-200 rounded p-2 text-center mb-4 border border-red-600">
      <p className="font-bold text-red-600 uppercase">{message}</p>
    </div>
  );
};
