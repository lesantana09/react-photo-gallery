import type { Photo } from "../models/photo";
import PhotoWidget from "./photo-widget";
import Text from "../../../components/text";
import Skeleton from "../../../components/skeleton";

interface PhotoListProps {
    photos: Photo[];
    loading?: boolean;
}

export default function PhotoList({photos, loading}: PhotoListProps) {
    const containerClass = "grid grid-cols-5 gap-y-8";
    return (
        
        <div className="space-y-6">    
            <Text as="div" variant="paragraph-large" className="flex items-center gap-1 text-accent-span">
                Total: {" "}
                {!loading ?
                    <div>{photos.length}</div>
                    : <Skeleton className="w-6 h-6"/>
                }
            </Text>
                {!loading && 
                    photos?.length > 0 && 
                <div className={containerClass}>
                    {photos.map(photo => <PhotoWidget key={photo.id} photo={photo} loading={loading ?? false} />)}
                </div>}    
                {loading && 
                 <div className={containerClass}>
                    {Array.from({length: 10}).map((_, index) => 
                    <PhotoWidget key={`photo-loading-${index}`} photo={{}as Photo} loading
                />)}
                </div>
                }      
            
            {!loading && photos.length === 0 && 
                <div className="flex justify-center items-center h-full"><Text variant="paragraph-large">Nenhuma foto encontrada</Text></div>
            }
        </div>
)};