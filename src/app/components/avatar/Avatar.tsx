interface props{
    size: number,
}

function Avatar({size} :props) {
    return (
      <img
        className="avatar"
        src="https://i.imgur.com/1bX5QH6.jpg"
        alt="Lin Lanying"
        width={size}
        height={size}
      />
    );

  }

  export default Avatar