type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="">
      <img src={picture} className="" alt={name} />
      <div className="">{name}</div>
    </div>
  );
};

export default Avatar;
