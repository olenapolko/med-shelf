const sortProducts = (products, sortOrder, favorites) => {
  return [...products].sort((a, b) => {
    const aIsFavorite = favorites.includes(a.id);
    const bIsFavorite = favorites.includes(b.id);

    if (aIsFavorite && !bIsFavorite) return -1;
    if (!aIsFavorite && bIsFavorite) return 1;

    switch (sortOrder) {
      case "price_asc":
        return a.price - b.price;
      case "price_desc":
        return b.price - a.price;
      case "date_added_new":
        return new Date(b.dateAdded) - new Date(a.dateAdded);
      case "date_added_old":
        return new Date(a.dateAdded) - new Date(b.dateAdded);
      default:
        return 0;
    }
  });
};

export default sortProducts;
