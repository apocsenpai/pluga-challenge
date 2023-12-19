import { ChevronRight } from "lucide-react";
import {CardList as List, Card, ImageWrapper, Overlay } from "./index.styled";

const CardList = () => {
  return (
    <List>
      <Card>
        <ImageWrapper></ImageWrapper>
        <span>Name</span>
        <Overlay>
          <p>
            EXPLORAR
            <span>
              <ChevronRight size={20} color={'#0ea7ff'} strokeWidth={3} />
            </span>
          </p>
        </Overlay>
      </Card>
    </List>
  );
};

export default CardList;
