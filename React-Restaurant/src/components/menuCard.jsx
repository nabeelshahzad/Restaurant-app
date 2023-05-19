import React from 'react'
import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material";
import "./Restaurant.css";

const menuCard = ({ menuData }) => {

    return (
        <div className="container">

            {menuData.map((currElem) => {

                const {id,image,name,category,price,Description} = currElem;
                return (
                    <>

                        <div className="item" key={id}>

                            <Box width='26vw'>
                                <Card>
                                    <CardContent>
                                        <Typography>{id}</Typography>
                                        <Typography>{category}</Typography>
                                    </CardContent>
                                    <CardMedia component='img' height='270' image={image} />
                                    <CardContent>
                                        <Typography gutterBottom varient='h5' component='div' > {name} </Typography>
                                        <Typography varient='body2' color='text.secondary'>
                                            {Description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size='small' >Order Now</Button>
                                    </CardActions>
                                </Card>
                            </Box>

                        </div>

                    </>
                )
            })}

        </div>
    )
}

export default menuCard
