import { Card, Col, Row, Typography } from 'antd';
import React from 'react';

const { Text } = Typography;
const Resources = () => {
  const resourceList = [
    {
      name: 'National Domestic Violence Helpline',
      url: 'https://www.thehotline.org/',
    },
    {
      name: 'National Sexual Assault Helpline',
      url: 'https://rainn.org/',
    },
    {
      name: 'Victim Connect Resource Center',
      url: 'https://victimconnect.org/',
    },
    {
      name: 'MADD (Mothers Against Drunk Driving',
      url: 'https://madd.org/',
    },
    {
      name: 'Internet Crime Complaint Center',
      url: 'https://www.ic3.gov/',
    },
    {
      name: 'Crime Stoppers USA',
      url: 'https://www.crimestoppersusa.org/',
    },
    {
      name: 'National Highway Traffic Safety Administration',
      url: 'https://www.nhtsa.gov/',
    },
    {
      name: 'Alchoholics Anonymous',
      url: 'https://www.aa.org/',
    },
    {
      name: 'National White Collar Crime Center',
      url: 'https://www.nw3c.org/UI/Index.html',
    },
    {
      name: 'Bureau of Alcohol, Tobacco, Firearms and Explosives',
      url: 'https://www.atf.gov/',
    },
    {
      name: 'Gun Violence Policy and Advocacy',
      url: 'https://giffords.org/',
    },
    {
      name: 'Community Resources',
      url: 'https://www.usa.gov/',
    },
  ];

  const handleCardClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div>
      <div
        style={{
          textAlign: 'center',
          fontSize: '34px',
          color: '#bf4250',
          marginBottom: '100px',
        }}
      >
        <b>Crime Resources</b>
      </div>
      <Row
        style={{ padding: '0px 20px' }}
        gutter={[16, 16]}
        justify="space-between"
      >
        {resourceList.map((item) => (
          <div key={item.name}>
            <Col key={item.name} xs={24} sm={12} md={8}>
              <Card
                hoverable
                bordered={false}
                onClick={() => handleCardClick(item.url)}
                style={{
                  width: 370,
                  height: 150,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: '#d3d4cf',
                }}
              >
                <Text style={{ color: '#bf4250', fontSize: '14px' }} ellipsis>
                  {item.name}
                </Text>
              </Card>
            </Col>
          </div>
        ))}
      </Row>
    </div>
  );
};

export default Resources;
