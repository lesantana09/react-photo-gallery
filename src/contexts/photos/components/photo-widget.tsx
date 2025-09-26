import ImagePreview from "../../../components/image-preview";
import Skeleton from "../../../components/skeleton";
import type { Photo } from "../models/photo";
import Text from "../../../components/text";
import Badge from "../../../components/badge";
import Button, { buttonTextVariants } from "../../../components/button";
import { Link } from "react-router";

interface PhotoWidgetProps {
    photo: Photo;
    loading?: boolean;
}

export default function PhotoWidget({photo, loading}: PhotoWidgetProps) {

    const badgeAlbumLength = 1;

    return <div className="flex flex-col gap-4">
        {!loading ? (
             <ImagePreview
                src={`/images/${photo.imageId}`}
                title={photo.title}
                imageClassName="w-[10.875rem] h-[10.875rem] rounded-lg"

             />
        ) : (
            <Skeleton className="w-[10.875rem] h-[10.875rem] rounded-lg" />
        )}
        
        <div className="flex flex-col gap-2">
            {!loading ? (
                <Text variant="paragraph-large" className="trucate">{photo.title}</Text>
            ): (
                <Skeleton className="w-[10.875rem] h-6"/>
            )}

            <div className="flex gap-1 min-h-[1.375rem]">
                {!loading ? (
                    <>
                        {photo.albums.slice(0, badgeAlbumLength).map(album => (
                            <Badge key={album.id} size="xs" className="truncate">
                                {album.title}
                            </Badge>
                        ))}
                        {photo.albums.length > badgeAlbumLength && <Badge size="xs">
                            +{photo.albums.length - badgeAlbumLength}</Badge>}
                    </>
                ): (
                   Array.from({length: 1}).map((_, index) => 
                   <Skeleton key={`album-loading${index}`} 
                   className="w-[10.875rem] h-4 rounded-sm"/>)
                )}
            </div>
        </div>
        {!loading ? (
            <Link
                to={`/photos/${photo.id}`}
                className={buttonTextVariants({
                    variant: "secondary",
                    size: "sm",
                   
                })}
            >
            <Button variant="secondary" size="sm" className="w-[10.875rem]">
                Detalhes da Imagem
            </Button>
            </Link>
        ): (
            <Skeleton className="w-[10.875rem] h-8"/>
        )}
    </div>
}