import type { Album } from "../models/album";
import Text from "../../../components/text";
import Button from "../../../components/button";
import cx from "classnames";
import Skeleton from "../../../components/skeleton";

interface AlbumsFiltersProps extends React.ComponentProps<"div"> {
  albums: Album[];
  loading?: boolean;
}

export default function AlbumsFilters({
  albums,
  loading,
  className,
  ...props
}: AlbumsFiltersProps) {
  return (
    <div
      className={cx("flex items-center gap-3.5 overflow-x-auto", className)}
      {...props}
    >
      <Text variant="heading-small">Albums:</Text>
      <div className="flex gap-3">
        {!loading ? (
          <>
            <Button size="sm" className="cursor-pointer" variant="primary">
              Todos
            </Button>
            {albums.map((album) => (
              <Button
                key={album.id}
                size="sm"
                className="cursor-pointer"
                variant="ghost"
              >
                {album.title}
              </Button>
            ))}
          </>
        ) : (
          Array.from({ length: 5 }).map((_, index) => (
            <Skeleton
              className="w-28 h-7"
              key={`album-button-loading-${index}`}
            />
          ))
        )}
      </div>
    </div>
  );
}
