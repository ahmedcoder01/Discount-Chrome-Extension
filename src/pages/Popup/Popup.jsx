import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from './Components/Header/Header';
import Loading from './Components/Loading/Loading';
import Promos from './Components/Promos/Promos';
import Message from './Components/Message/Message';
import MESSAGES from './../../utils/messages';
import './Popup.css';

function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  console.log(data);

  useEffect(() => {
    chrome.runtime.sendMessage({ type: 'GET_PROMOS' }, (response) => {
      setLoading(false);
      console.log('hello');
      if (response.status === true) {
        setData(response.data);
      } else if (response.status === false) {
        setError(response.error);
      }
    });
  }, []);

  return (
    <div>
      <Header />

      <div className="body-wrapper">
        {/* MESSAGES */}
        {!loading && !data?.matched && !error && (
          <Message>{MESSAGES.noPromosFound}</Message>
        )}
        {!loading && data?.matched && !error && (
          <Message>
            Good news! We’ve found some promos for{' '}
            <span>{data.websiteName}</span> that will help you save! 🎉
          </Message>
        )}

        {error && !loading && <Message type="error">{error}</Message>}
        {/* PROMOS */}
        {loading && <Loading />}
        {!loading && !error && data?.promos && <Promos promos={data.promos} />}
      </div>
    </div>
  );
}

export default Home;
