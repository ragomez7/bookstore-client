import { Box, Button, Typography } from "@mui/material"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


const Layout = ({ children, title }) => {
    const location = useLocation();
    return (
        <Box
            className="Layout"
            sx={{
                backgroundColor: '#0D3B66',
                height: '1000px',
                paddingX: 35,
            }}
        >
            <Box sx={{
                backgroundColor: 'white',
                display: 'flex',
                flexDirection: "column",
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 4,
                height: '1000px'
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 1,
                    width: '100%',
                    position: 'relative'
                }}>
                    {location.pathname !== "/" ?
                        <Link to="/">
                            <Button sx={{
                                position: 'absolute',
                                top: 0,
                                left: 80
                            }} >
                                Go Back
                            </Button>
                        </Link> : undefined}
                    <Typography variant="h4" sx={{
                        marginTop: 1,
                        marginBottom: 3
                    }} >
                        {title}
                    </Typography>
                </Box>
                {children}
            </Box>

        </Box>
    )
};

export default Layout;