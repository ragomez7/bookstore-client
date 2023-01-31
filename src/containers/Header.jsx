import { Divider, Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      <div style={{
        display: 'flex',
        width: '100%',
        paddingLeft: 20,
        backgroundColor: '#0D3B66',
      }}>
        <Typography variant="h4" sx={{
          fontFamily: "Times-New-Roman",
          fontWeight: 600,
          letterSpacing: 1.3,
          marginY: '22px',
          color: '#FAF0CA'
        }}>
          John's Bookstore
        </Typography>
      </div>
      <Divider sx={{
        borderColor: '#0D3B66'
      }} />
    </>
  );
}

export default Header;
