const productPriceFormatter = (price: string) => {
    const PRICE_FORMATTER = Intl.NumberFormat(undefined, {
      style: "currency",
      currency: "PHP",
    });

    return PRICE_FORMATTER.format(Number(price));
  };

  export default productPriceFormatter;