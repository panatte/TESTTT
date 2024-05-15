'use client';
import { useState, useEffect } from 'react';
import axios from 'axios'; // ต้องติดตั้ง axios ก่อนใช้งาน
import PopUp from './popup';
import ReloadImage from './reloadImage';
interface BoradProps {
    gridClass: string;
}

const Borad: React.FC<BoradProps> = ({ gridClass }) => {
    const [imgURLS, setImgURLS] = useState<string[]>([]);
    const [showPopUp, setShowPopUp] = useState('');

    const handleClick = (url: string) => {
        console.log('Print url:', url);
        setShowPopUp(url);
        
    };

    const handleClose = () => {
        setShowPopUp('');
    
    };

    useEffect(() => {
        async function fetchBlobImages() {
            try {
                const response = await axios.get('/api/fetchBlobImages');
                const { urls } = response.data;
                setImgURLS(urls);

                if (urls.length === 0) {
                    window.location.reload();
                    console.log('No images found.');
                }

            } catch (error) {
                console.error('Error fetching images:', error);
            }
        }
        fetchBlobImages();
    }, []);

    const cols_one = [];
    const cols_two = [];
    const cols_three = [];
    const cols_four = [];
    const cols_five = [];
    const cols_more = [];

    for (let i = 0; i < imgURLS.length; i++) {
        if (cols_one.length <= 3){
            cols_one.push(imgURLS[i]);
        } else if (cols_two.length <= 3) {
            cols_two.push(imgURLS[i]);
        } else if (cols_three.length <= 3) {
            cols_three.push(imgURLS[i]);
        } else if (cols_four.length <= 3) {
            cols_four.push(imgURLS[i]);
        } else if (cols_five.length <= 3) {
            cols_five.push(imgURLS[i]);
        } else {
            cols_more.push(imgURLS[i]);
        }
    }
    
    return (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className={gridClass}>
                {cols_one.map((url, index) => (
                    // console.log('col 0', url),
                    <div key={index} className='w-full h-full flex'>
                        <img className="h-auto max-w-full rounded-lg object-cover" src={url} alt="" onClick={() => handleClick(url)}/>
                    </div>
                ))}
            </div>
            <div className={gridClass}>
                {cols_two.map((url, index) => (
                    // console.log('col 1', url),
                    <div key={index} className='w-full h-full flex'>
                        <img className="h-auto max-w-full rounded-lg object-cover" src={url} alt="" onClick={() => handleClick(url)}/>
                    </div>
                ))}
            </div>
            <div className={gridClass}>
                {cols_three.map((url, index) => (
                    // console.log('col 2', url),
                    <div key={index} className='w-full h-full flex'>
                        <img className="h-auto max-w-full rounded-lg object-cover" src={url} alt="" onClick={() => handleClick(url)}/>
                    </div>
                ))}
            </div>
            <div className={gridClass}>
                {cols_four.map((url, index) => (
                    // console.log('col 3', url),
                    <div key={index} className='w-full h-full flex'>
                        <img className="h-auto max-w-full rounded-lg object-cover" src={url} alt="" onClick={() => handleClick(url)}/>
                    </div>
                ))}
            </div>
            <div className={gridClass}>
                {cols_five.map((url, index) => (
                    // console.log('col 4', url),
                    <div key={index} className='w-full h-full flex'>
                        <img className="h-auto max-w-full rounded-lg object-cover" src={url} alt="" onClick={() => handleClick(url)}/>
                    </div>
                ))}
            </div>

            {showPopUp && <PopUp imgUrl={showPopUp} onclose={handleClose} />}
        </div>
    );
};

export default Borad;
