import React from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';

const DetailContainer = styled.div`
  min-height: 100vh;
  padding: 80px 2rem 2rem;
  background: linear-gradient(135deg, #FFF 0%, #FFB6C1 100%);
`;

const BackButton = styled.button`
  position: fixed;
  top: 80px;
  left: 20px;
  background: rgba(255, 105, 180, 0.8);
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    background: rgba(255, 20, 147, 0.9);
  }
`;

const Title = styled.h1`
  text-align: center;
  color: #FF69B4;
  font-family: 'Dancing Script', cursive;
  margin-bottom: 2rem;
  font-size: 3rem;
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
`;

const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const MediaCard = styled.div`
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  background: white;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const MediaImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 300px;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Caption = styled.p`
  padding: 15px;
  text-align: center;
  color: #FF69B4;
  font-family: 'Poppins', sans-serif;
`;

function MemoryDetail() {
  const { category } = useParams();
  const navigate = useNavigate();
  
  // This function will map the route parameter to a proper title
  const getCategoryTitle = () => {
    const titles = {
      'first-date': 'Our First Date',
      'photo-booth': 'Photo Booth Fun',
      'foodie-us': 'Foodie Adventures',
      'trips': 'Our Trips Together',
      'festivals': 'Festival Celebrations',
      'journey': 'Our Journey',
      'notes': 'Sweet Notes',
      'people': 'Lovely People'
    };
    
    return titles[category] || 'Our Memories';
  };
  
  // This function will return the appropriate media items based on the category
  const getMediaItems = () => {
    // You can customize these arrays with your actual images and videos
    const mediaCollections = {
      'first-date': [
        { type: 'image', src: '/images/WhatsApp Image 2025-05-16 at 20.58.18_69d33e36.jpg',  },
        { type: 'image', src: '/images/WhatsApp Image 2025-05-16 at 20.58.23_2c50a93c.jpg',  },
        { type: 'image', src: '/images/WhatsApp Image 2025-05-16 at 20.58.27_00fd4021.jpg',  },
        { type: 'image', src: '/images/WhatsApp Image 2025-05-16 at 20.58.27_f6adc28d.jpg',  },
        { type: 'image', src: '/images/WhatsApp Image 2025-05-16 at 21.00.51_813ac54c.jpg',  },
        { type: 'video', src: '/images/WhatsApp Video 2025-05-16 at 20.58.23_8c2556a3.mp4',  },
        // Add more items as needed
      ],
      'Ice-cream Paglu': [
        { type: 'video', src: '/images/WhatsApp Video 2025-05-16 at 21.08.18_ff4d8e21.mp4',  },
        { type: 'video', src: '/images/WhatsApp Video 2025-05-16 at 21.08.19_1aac5251.mp4',  },
        { type: 'image', src: '/images/WhatsApp Image 2025-05-16 at 21.08.19_e77a6e86.jpg', },
        { type: 'image', src: '/images/WhatsApp Image 2025-05-16 at 21.08.19_0d78def2.jpg',  },
        { type: 'image', src: '/images/WhatsApp Image 2025-05-16 at 21.08.19_b2e12188.jpg',  },
        { type: 'video', src: '/images//WhatsApp Video 2025-05-16 at 21.15.32_1590cfcd.mp4',  },
        { type: 'image', src: '/images//WhatsApp Image 2025-05-16 at 21.15.32_cac46000.jpg',  },
        { type: 'image', src: '/images/WhatsApp Image 2025-05-16 at 21.15.32_b76ab132.jpg', },
        { type: 'image', src: '/images//WhatsApp Image 2025-05-16 at 21.15.32_b151ab28.jpg',  },
        // Add more items as needed
      ],
      // Add similar arrays for other categories
      'foodie-us': [
        { type: 'image', src: '/images/food1.jpg',  },
        { type: 'image', src: '/images/food2.jpg',  },
        // Add more items as needed
      ],
      'trips': [
        { type: 'image', src: '/images/trip1.jpg',  },
        { type: 'image', src: '/images/trip2.jpg',  },
        { type: 'video', src: '/videos/trip_montage.mp4', },
        // Add more items as needed
      ],
      'Phool Wali': [
        { type: 'image', src: '/images/WhatsApp Image 2025-05-16 at 21.26.22_58d40df9.jpg',  },
        { type: 'image', src: '/images/WhatsApp Image 2025-05-16 at 21.23.35_71e2da55.jpg',  },
        { type: 'image', src: '/images/WhatsApp Image 2025-05-16 at 21.26.22_88fe131d.jpg',  },
        { type: 'image', src: '/images/WhatsApp Image 2025-05-16 at 21.26.22_a2427484.jpg',  },
        { type: 'image', src: '/images/WhatsApp Image 2025-05-16 at 21.23.32_73ada501.jpg',  },
        { type: 'image', src: '/images/WhatsApp Image 2025-05-16 at 21.23.34_5b86b11b.jpg',  },
        { type: 'image', src: '/images/WhatsApp Image 2025-05-16 at 21.23.34_0e9ee180.jpg', },
        { type: 'image', src: '/images/WhatsApp Image 2025-05-16 at 21.23.33_ed95d4c2.jpg',  },
        { type: 'image', src: '/images/WhatsApp Image 2025-05-16 at 21.23.33_748d2bed.jpg', },
        { type: 'image', src: '/images/WhatsApp Image 2025-05-16 at 21.23.33_3b1413b1.jpg',  },
        

        
        // Add more items as needed
      ],
      'Always & Forever': [
        { type: 'image', src: '/images/WhatsApp Image 2025-05-16 at 22.53.50_0264fdb6.jpg',  },
        { type: 'image', src: '/images/WhatsApp Image 2025-05-16 at 22.53.51_53ac15cf.jpg',  },
        { type: 'video', src: '/images/WhatsApp Video 2025-05-16 at 22.54.01_873aaea6.mp4',   },
        { type: 'image', src: '/images/WhatsApp Image 2025-05-16 at 22.54.01_074e0f7f.jpg',  },
        { type: 'image', src: '/images/WhatsApp Image 2025-05-16 at 22.54.01_9f3fde93.jpg',  },
        { type: 'video', src: '/images/WhatsApp Video 2025-05-16 at 22.54.02_120a352a.mp4',  },
        { type: 'image', src: '/images/WhatsApp Image 2025-05-16 at 22.54.02_d7838e9c.jpg',  },
        { type: 'image', src: '/images/WhatsApp Image 2025-05-16 at 22.54.02_c9f1b4ec.jpg',  },
        { type: 'image', src: '/images//WhatsApp Image 2025-05-16 at 22.54.03_323600ad.jpg',},
        { type: 'image', src: '/images/WhatsApp Image 2025-05-16 at 22.54.04_36894451.jpg',  },
        { type: 'image', src: '/images/WhatsApp Image 2025-05-16 at 22.54.04_14af990d.jpg',  },
        { type: 'image', src: '/images/WhatsApp Image 2025-05-16 at 22.54.04_1f07aed4.jpg',  },
        { type: 'image', src: '/images/WhatsApp Image 2025-05-16 at 22.54.04_8300d8bf.jpg',  },
        { type: 'image', src: '/images/WhatsApp Image 2025-05-16 at 22.54.05_fc5844ad.jpg', },
        { type: 'image', src: '/images/WhatsApp Image 2025-05-16 at 22.54.05_31fa9439.jpg',  },
        { type: 'image', src: '/images/WhatsApp Image 2025-05-16 at 22.54.05_a1e40dcd.jpg', },
        // Add more items as needed
      ],
      'Hehe': [
        { type: 'image', src: '/images/WhatsApp Image 2025-05-16 at 23.27.20_ca1495e4.jpg', caption: 'Kissy to my' },
        { type: 'image', src: '/images/WhatsApp Image 2025-05-16 at 23.29.14_b455063c.jpg', caption: 'Cutuuuuuu' },
        
        // Add more items as needed
      ],
      'people': [
        { type: 'video', src: '/images/WhatsApp Video 2025-05-16 at 21.16.59_54f2e147.mp4', },
        { type: 'video', src: '/images/WhatsApp Video 2025-05-16 at 22.02.02_a82eec81.mp4',},
        { type: 'video', src: '/images/WhatsApp Video 2025-05-16 at 20.55.48_6145dc81.mp4', },
        { type: 'video', src: '/images/WhatsApp Video 2025-05-16 at 22.11.02_93d6181f.mp4', },
        { type: 'video', src: '/images/Snapchat-475349782~2.mp4',  },
        // Add more items as needed
      ]
    };
    
    return mediaCollections[category] || [];
  };
  
  const mediaItems = getMediaItems();
  
  return (
    <DetailContainer>
      <BackButton onClick={() => navigate(-1)}>←</BackButton>
      <Title>{getCategoryTitle()}</Title>
      
      <MediaGrid>
        {mediaItems.map((item, index) => (
          <MediaCard key={index}>
            {item.type === 'image' ? (
              <MediaImage src={item.src} alt={item.caption} />
            ) : (
              <VideoContainer>
                <Video controls>
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </Video>
              </VideoContainer>
            )}
            <Caption>{item.caption}</Caption>
          </MediaCard>
        ))}
      </MediaGrid>
    </DetailContainer>
  );
}

export default MemoryDetail;