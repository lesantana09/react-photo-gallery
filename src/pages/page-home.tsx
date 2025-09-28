import Container from "../components/container";
import AlbumsFilters from "../contexts/albums/components/albums-filters";
import PhotoList from "../contexts/photos/components/photo-list";

export default function PageHome() {
  return (
    <Container>
      <AlbumsFilters
        albums={[
          { id: "1", title: "Album 1" },
          { id: "2", title: "Album 2" },
          { id: "3", title: "Album 3" },
        ]}
        className="mb-9"
      />

      <PhotoList
        photos={[
          {
            id: "123",
            title: "Photo 1",
            imageId: "portrait-tower.png",
            albums: [
              { id: "1", title: "Album 1" },
              { id: "2", title: "Album 2" },
              { id: "3", title: "Album 3" },
            ],
          },
          {
            id: "124",
            title: "Photo 1",
            imageId: "portrait-tree.png",
            albums: [
              { id: "1", title: "Album 1" },
              { id: "2", title: "Album 2" },
            ],
          },
        ]}
      />
    </Container>
  );
}
