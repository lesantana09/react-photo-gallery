import Container from "./container";
import React from "react";
import Logo from "../assets/images/galeria-plus-full-logo.svg?react";
import { Link } from "react-router";
import cx from "classnames";
import Button from "./button";
import PhotosSearch from "./photo-search";
import Divider from "./divider";

interface MainHeaderProps extends React.ComponentProps<typeof Container> {}

export default function MainHeader({className, ...props}: MainHeaderProps) {
    return (
       <Container 
            as="header"
            className={cx(`flex justify-between items-center gap-10`, className)}
            {...props}
        >
        <Link to="/">
            <Logo  className="h-5"/>
        </Link>

        <PhotosSearch/>
        <Divider orientation="vertical" className="h-10"/>

        <div className="flex items-center gap-3">
            <Button>Nova Foto</Button>
            <Button variant="secondary">Criar Álbum</Button>
        </div>

       </Container>
    );
}