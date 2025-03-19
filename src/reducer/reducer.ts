interface GameProps {
  id: number;
  name: string;
  slug: string;
  background_image: string;
}

export interface StateProps {
  wishlist: GameProps[];
  library: GameProps[];
}

export type Action =
  | { type: "addLibrary"; payload: GameProps }
  | { type: "removeLibrary"; payload: { id: number } }
  | { type: "addWishlist"; payload: GameProps }
  | { type: "removeWishlist"; payload: { id: number } };

export const initialState: StateProps = {
  wishlist: [],
  library: [],
};

export const reducer = (state: StateProps, action: Action): StateProps => {
  switch (action.type) {
    case "addLibrary":
      return { ...state, library: [...state.library, action.payload] };
    case "removeLibrary":
      return {
        ...state,
        library: state.library.filter((game) => game.id !== action.payload.id),
      };
    case "addWishlist":
      return { ...state, wishlist: [...state.wishlist, action.payload] };
    case "removeWishlist":
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (game) => game.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
