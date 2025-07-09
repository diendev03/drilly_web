type Props = {
  email: string;
};

const AccountCard = ({ email }: Props) => {
  return <div>Email: {email}</div>;
};

export default AccountCard;
