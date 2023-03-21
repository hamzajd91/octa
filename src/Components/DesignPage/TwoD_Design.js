import { Button, Grid } from '@mui/material'
import React from 'react'
import design1 from "./Assets/design1.png"
import design2a from "./Assets/design2a.png"
import design2b from "./Assets/design2b.png"
import design3a from "./Assets/design3a.png"
import design3b from "./Assets/design3b.png"
import design4 from "./Assets/design4.png"
import design5 from "./Assets/design5.png"


const Designimage2 = () => {
    return (
        <div className='centered designimage2'>
            <img src={design2a} />
            <img src={design2b} />
        </div>
    )
}

const Designimage3 = () => {
    return (
        <div className='centered designimage3'>
            <img src={design3a} />
            <img src={design3b} />
        </div>
    )
}

function TwoD_Design() {
    return (
        <div className='centered TwoD_Design'>
            <h3 className='OctaHeader centered flex-column'>2D Designs Services
                <p style={{scale:".7"}}>2D Designs Services</p>
            </h3>

            <Grid container xs={12} className="py-5 container centered justify-content-between">
                <Grid item md={6.8} xs={11.9} className="  p-1 DesignGrid flex-column">
                    <div className='DesignGridTitle'>
                        <div>1</div>
                        <div>UI/UX</div>
                    </div>
                    <p className='DesignGrid_text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque proin bibendum nisl
                        quisque nascetur eget at sit lacinia. Vestibulum cras diam dictum adipiscing nunc
                        tempus vestibulum, ac. Eget fringilla malesuada molestie vitae tincidunt fermentum
                        consectetur elementum. Pulvinar aliquet rutrum odio ultrices molestie vitae, turpis a
                        t interdum.  </p>

                    <div className='DesignGrid_details'>
                        <div className=''>
                            <p className='DesignGrid_items'> <div></div> itemName</p>
                            <p className='DesignGrid_items'> <div></div> itemName</p>
                            <p className='DesignGrid_items'> <div></div> itemName</p>
                            <p className='DesignGrid_items'> <div></div> itemName</p>
                            <p className='DesignGrid_items'> <div></div> itemName</p>
                        </div>

                        <Button className='DesignGrid_Button'>
                            Read More
                        </Button>
                    </div>
                </Grid>
                <Grid item md={4.8} xs={11.9} className="  DesignGrid centered flex-column">
                    <img src={design1} />
                </Grid>
            </Grid>

            <div className='w-100 py-5' style={{ background: "var(--basegrey)" }}>
                <Grid container xs={12} className=" container centered justify-content-between DesignDark">
                    <Grid item md={6.8} xs={11.9} className="  p-1 DesignGrid flex-column">
                        <div className='DesignGridTitle DesignDark'>
                            <div className='Designlight'>2</div>
                            <div>2D Characters</div>
                        </div>
                        <p className='DesignGrid_text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque proin bibendum nisl
                            quisque nascetur eget at sit lacinia. Vestibulum cras diam dictum adipiscing nunc
                            tempus vestibulum, ac. Eget fringilla malesuada molestie vitae tincidunt fermentum
                            consectetur elementum. Pulvinar aliquet rutrum odio ultrices molestie vitae, turpis a
                            t interdum.  </p>

                        <div className='DesignGrid_details'>
                            <div className=''>
                                <p className='DesignGrid_items'> <div></div> itemName</p>
                                <p className='DesignGrid_items'> <div></div> itemName</p>
                                <p className='DesignGrid_items'> <div></div> itemName</p>
                                <p className='DesignGrid_items'> <div></div> itemName</p>
                                <p className='DesignGrid_items'> <div></div> itemName</p>
                            </div>

                            <Button className='DesignGrid_Button_Dark'>
                                Read More
                            </Button>
                        </div>
                    </Grid>
                    <Grid item md={4.8} xs={11.9} className="  DesignGrid centered flex-column">
                        <Designimage2 />
                    </Grid>
                </Grid>
            </div>

            <Grid container xs={12} className=" py-5 container centered justify-content-between">
                <Grid item md={6.8} xs={11.9} className="  p-1 DesignGrid flex-column">
                    <div className='DesignGridTitle'>
                        <div>3</div>
                        <div>2D Enviroment</div>
                    </div>
                    <p className='DesignGrid_text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque proin bibendum nisl
                        quisque nascetur eget at sit lacinia. Vestibulum cras diam dictum adipiscing nunc
                        tempus vestibulum, ac. Eget fringilla malesuada molestie vitae tincidunt fermentum
                        consectetur elementum. Pulvinar aliquet rutrum odio ultrices molestie vitae, turpis a
                        t interdum.  </p>

                    <div className='DesignGrid_details'>
                        <div className=''>
                            <p className='DesignGrid_items'> <div></div> itemName</p>
                            <p className='DesignGrid_items'> <div></div> itemName</p>
                            <p className='DesignGrid_items'> <div></div> itemName</p>
                            <p className='DesignGrid_items'> <div></div> itemName</p>
                            <p className='DesignGrid_items'> <div></div> itemName</p>
                        </div>

                        <Button className='DesignGrid_Button'>
                            Read More
                        </Button>
                    </div>
                </Grid>
                <Grid item md={4.8} xs={11.9} className="  DesignGrid centered flex-column">
                    <Designimage3 />
                </Grid>
            </Grid>

            <div className='w-100 py-5' style={{ background: "var(--basegrey)" }}>
                <Grid container xs={12} className=" container centered justify-content-between">
                    <Grid item md={6.8} xs={11.9} className="  p-1 DesignGrid flex-column DesignDark">
                        <div className='DesignGridTitle DesignDark'>
                            <div className='Designlight'>4</div>
                            <div>Social Media</div>
                        </div>
                        <p className='DesignGrid_text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque proin bibendum nisl
                            quisque nascetur eget at sit lacinia. Vestibulum cras diam dictum adipiscing nunc
                            tempus vestibulum, ac. Eget fringilla malesuada molestie vitae tincidunt fermentum
                            consectetur elementum. Pulvinar aliquet rutrum odio ultrices molestie vitae, turpis a
                            t interdum.  </p>

                        <div className='DesignGrid_details'>
                            <div className=''>
                                <p className='DesignGrid_items'> <div></div> itemName</p>
                                <p className='DesignGrid_items'> <div></div> itemName</p>
                                <p className='DesignGrid_items'> <div></div> itemName</p>
                                <p className='DesignGrid_items'> <div></div> itemName</p>
                                <p className='DesignGrid_items'> <div></div> itemName</p>
                            </div>

                            <Button className='DesignGrid_Button_Dark'>
                                Read More
                            </Button>
                        </div>
                    </Grid>
                    <Grid item md={4.8} xs={11.9} className="  DesignGrid centered flex-column">
                        <img src={design4} />
                    </Grid>
                </Grid>
            </div>

            <Grid container xs={12} className=" py-5 container centered justify-content-between">
                <Grid item md={6.8} xs={11.9} className="  p-1 DesignGrid flex-column">
                    <div className='DesignGridTitle'>
                        <div>5</div>
                        <div>Animation</div>
                    </div>
                    <p className='DesignGrid_text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque proin bibendum nisl
                        quisque nascetur eget at sit lacinia. Vestibulum cras diam dictum adipiscing nunc
                        tempus vestibulum, ac. Eget fringilla malesuada molestie vitae tincidunt fermentum
                        consectetur elementum. Pulvinar aliquet rutrum odio ultrices molestie vitae, turpis a
                        t interdum.  </p>

                    <div className='DesignGrid_details'>
                        <div className=''>
                            <p className='DesignGrid_items'> <div></div> itemName</p>
                            <p className='DesignGrid_items'> <div></div> itemName</p>
                            <p className='DesignGrid_items'> <div></div> itemName</p>
                            <p className='DesignGrid_items'> <div></div> itemName</p>
                            <p className='DesignGrid_items'> <div></div> itemName</p>
                        </div>

                        <Button className='DesignGrid_Button'>
                            Read More
                        </Button>
                    </div>
                </Grid>
                <Grid item md={4.8} xs={11.9} className="  DesignGrid centered flex-column">
                    <img src={design5} />
                </Grid>
            </Grid>




        </div>
    )
}

export default TwoD_Design