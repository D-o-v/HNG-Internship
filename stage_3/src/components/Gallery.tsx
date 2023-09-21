import { useState,useEffect } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import Header from './Header';
import Footer from "./Footer"
import { LoginProps,Character} from '../types/types';
import {galleryList} from "../data"
import LoadingOverlay from 'react-loading-overlay-ts';
import { Spinner } from "react-bootstrap";


function ImageGrid({ isIn, setIsIn }: LoginProps) {
  const [searchItem,setSearchItem] =useState("")
  const [characters, updateCharacters] = useState<Character[]>(galleryList);
  const [loading,setLoading]= useState(true)

  function handleOnDragEnd(result: DropResult) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  function searchPicturesByName(query:string, pictureArray:Character[]) {
    const queryLowerCase = query.toLowerCase();
  
    const filteredPictures = pictureArray.filter((picture) => {
      const pictureNameLowerCase = picture.name.toLowerCase();
      return pictureNameLowerCase.includes(queryLowerCase);
    });
  
    return filteredPictures;
  }

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])
 

useEffect(()=>{
  updateCharacters(searchPicturesByName(searchItem,galleryList))
},[searchItem])
  return (
    <div className="d-flex flex-column m-0 p-0">
      {loading
        ?(<LoadingOverlay active={loading} spinner>
        <div className="mx-auto w-100 align-items-center justify-content-center d-flex" style={{height:"100vh"}}>
          <Spinner animation="grow" />
        </div>
      </LoadingOverlay> )
      :(<><div className='m-0 col-12'
      style={{ position: 'sticky', top: '0', zIndex: '100' }}>
      <Header isIn={isIn} setIsIn={setIsIn} setSearchItem={setSearchItem}/>
      </div>
      <p className='py-lg-5 fw-bold mx-2rem px-3 px-lg-auto col-12' style={{fontSize:"2rem"}}>Hello and welcome to our unique and creatively styled photo gallery!</p>
      <div className='col-12'>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters" direction="horizontal">
          {(provided) => (
            <div
              className="d-flex flex-wrap align-items-center justify-content-center px-auto gap-lg-5 py-0 m-0"
              style={{
                listStyle: "none",
                overflowX:"hidden"
              }}
              {...provided.droppableProps} ref={provided.innerRef}>
              {characters.length>1
              ? characters.map(({ id, name, thumb }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="character-item">
                        <div className="characters-thumb">
                          <img src={thumb} alt={`${name} Thumb`} style={{maxHeight:"300px",height:"200px"}} />
                        </div>
                        <p className='fw-bold py-1 mx-auto'>{name}</p>
                      </div>
                    )}
                  </Draggable>
                );
              })
              :<p className='fw-bold my-5' style={{fontSize:"1.5rem"}}>No matching image found!</p>}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      </div>
      <div className='col-12'>
      <Footer/>
      </div></>)}
      
    </div>
  );
}

export default ImageGrid;

