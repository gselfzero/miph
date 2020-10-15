import React from 'react';
import PropTypes from 'prop-types';
import connect from '@vkontakte/vkui-connect';
import Icon24Gift from '@vkontakte/icons/dist/24/gift';
import Icon28Settings from '@vkontakte/icons/dist/28/settings';
import Icon16Fire from "@vkontakte/icons/dist/16/fire";
import Icon24Mention from '@vkontakte/icons/dist/24/mention';
import Icon24User from '@vkontakte/icons/dist/24/user';
import Icon24Coins from '@vkontakte/icons/dist/24/coins';
import Icon24MoneyTransfer from '@vkontakte/icons/dist/24/money_transfer';
import Icon24Market from '@vkontakte/icons/dist/24/market';
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';
import Icon28Send from '@vkontakte/icons/dist/28/send';
import Icon24Bug from '@vkontakte/icons/dist/24/bug';
import Icon24Pin from '@vkontakte/icons/dist/24/pin';
import Icon24Settings from '@vkontakte/icons/dist/24/settings';
import Icon28Favorite from '@vkontakte/icons/dist/28/favorite';
import Icon28AirplayVideoOutline from '@vkontakte/icons/dist/28/airplay_video_outline';
import Icon24SkipNext from '@vkontakte/icons/dist/24/skip_next';
import Icon28Video from '@vkontakte/icons/dist/28/video';
import Icon28GiftOutline from '@vkontakte/icons/dist/28/gift_outline';
import Icon24Send from '@vkontakte/icons/dist/24/send';
import Icon24Game from '@vkontakte/icons/dist/24/game';
import Icon28User from '@vkontakte/icons/dist/28/user';
import Icon24Home from '@vkontakte/icons/dist/24/home';
import Icon24Services from '@vkontakte/icons/dist/24/services';
import Icon28BombOutline from '@vkontakte/icons/dist/28/bomb_outline';
import Icon28PrivacyOutline from '@vkontakte/icons/dist/28/privacy_outline';
import Icon24BrowserForward from '@vkontakte/icons/dist/24/settings';
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
import Icon24Qr from '@vkontakte/icons/dist/24/qr';
import Icon28PollSquareOutline from '@vkontakte/icons/dist/28/poll_square_outline';
import { Panel, Button, Group, Tabs, TabsItem, Div, PanelHeaderBack, Avatar, Separator, PanelHeader, Footer, Search, CardGrid, Card, List, Cell, Header, Tooltip, FormStatus, FixedLayout, Epic, Tabbar, TabbarItem, Banner } from '@vkontakte/vkui';
import './assets/css/bootstrap.css';
import './assets/css/style.css';
import '@vkontakte/vkui/dist/vkui.css';
import Icon24UserOutline from '@vkontakte/icons/dist/24/user_outline';
import Icon28BrainOutline from '@vkontakte/icons/dist/28/brain_outline';
import Icon28CompassOutline from '@vkontakte/icons/dist/28/compass_outline';
import Icon28DevicesOutline from '@vkontakte/icons/dist/28/devices_outline';
import Icon28ArchiveOutline from '@vkontakte/icons/dist/28/archive_outline';
import Icon28GameOutline from '@vkontakte/icons/dist/28/game_outline';
import Icon28LinkOutline from '@vkontakte/icons/dist/28/link_outline';
import Icon28AirplayAudioOutline from '@vkontakte/icons/dist/28/airplay_audio_outline';
import Icon24ScanViewfinderOutline from '@vkontakte/icons/dist/24/scan_viewfinder_outline';
import Icon28GhostOutline from '@vkontakte/icons/dist/28/ghost_outline';
import Icon24NarrativeFilled from '@vkontakte/icons/dist/24/narrative_filled';
import Icon12OnlineMobile from '@vkontakte/icons/dist/12/online_mobile';
import Icon28SafariOutline from '@vkontakte/icons/dist/28/safari_outline';
import Icon24NarrativeActiveOutline from '@vkontakte/icons/dist/24/narrative_active_outline';
const Shop = props => (
  <Panel id={props.id}>
  <PanelHeader left={<PanelHeaderBack onClick={props.go} data-to='home' />}>  
Ускорители
  </PanelHeader>  
  <div class="subtitle"><small>У вас </small>{props.gold.toFixed(4)} <small> эмеральдов</small></div>
   <Group header={<Header mode="secondary">Клик</Header>}> 
    <Banner
        before={<Avatar size={40}> <Icon28PrivacyOutline /> </Avatar> }
        header="Дедовская мышка"
        subheader={`+0.0001/клик. • Цена: ${props.click1} `}
       
        actions={
          <React.Fragment>          <br/> 

            <Button mode="commerce" onClick={props.buyClick1} >Купить</Button>
            
          </React.Fragment>
        }
      />
        <Banner
                before={<Avatar size={40}> <Icon28PrivacyOutline /> </Avatar> }

        header="Беспроводная мышка"
        subheader={`+0.0002/клик. • Цена: ${props.click2} `}
       
        actions={
          <React.Fragment>          <br/> 

            <Button mode="commerce" onClick={props.buyClick2} >Купить</Button>
            
          </React.Fragment>
        }
      />
        <Banner
                before={<Avatar size={40}> <Icon28PrivacyOutline /> </Avatar> }

        header="Мышка из будущего"
        subheader={`+0.0010/клик. • Цена: ${props.click3} `}
       
        actions={
          <React.Fragment>          <br/> 

            <Button mode="commerce" onClick={props.buyClick3} >Купить</Button>
            
          </React.Fragment>
        }
      />
        <Banner
                before={<Avatar size={40}> <Icon28PrivacyOutline width={28} height={28} /> </Avatar> }

        header="Квантовая мышка"
        subheader={`+0.0500/клик. • Цена: ${props.click4} Эм.`}
       
        actions={
          <React.Fragment>          <br/> 

            <Button mode="commerce" onClick={props.buyClick4} >Купить</Button>
            
          </React.Fragment>
        }
      />
        <Banner
                before={<Avatar size={40}> <Icon28PrivacyOutline /> </Avatar> }

        header="Магическая мышка"
        subheader={`+0.0700/клик. • Цена: ${props.click5}  Эм.`}
       
        actions={
          <React.Fragment>          <br/> 

            <Button mode="commerce" onClick={props.buyClick5} >Купить</Button>
            
          </React.Fragment>
        }
      />
   </Group>

    <Group header={<Header mode="secondary">Автоматические</Header>}>
      <Banner
                       before={<Avatar size={40}> <Icon28GameOutline /> </Avatar> }

        header="Старый ноутбук"
        subheader={`+0.0001/сек. • Цена: ${props.mine1} `}
       
        actions={
          <React.Fragment>          <br/> 

            <Button mode="commerce" onClick={props.buyAuto1}>Купить</Button>
            
          </React.Fragment>
        }
      />
       <Banner
                       before={<Avatar size={40}> <Icon28GameOutline /> </Avatar> }

        header="Компьютер деда"
        subheader={`+0.0005/сек. • Цена: ${props.mine2} `}
       
        actions={
          <React.Fragment>          <br/> 

            <Button mode="commerce" onClick={props.buyAuto2}>Купить</Button>
            
          </React.Fragment>
        }
      />
       <Banner
                       before={<Avatar size={40}> <Icon28GameOutline /> </Avatar> }

        header="Игровой компьютер"
        subheader={`+0.0010/сек. • Цена: ${props.mine3} `}
       
        actions={
          <React.Fragment>          <br/> 

            <Button mode="commerce" onClick={props.buyAuto3}>Купить</Button>
            
          </React.Fragment>
        }
      />
       <Banner
                       before={<Avatar size={40}> <Icon28GameOutline /> </Avatar> }

        header="Супер компьютер"
        subheader={`+0.0015/сек. • Цена: ${props.mine4} `}
       
        actions={
          <React.Fragment>          <br/> 

            <Button mode="commerce" onClick={props.buyAuto4}>Купить</Button>
            
          </React.Fragment>
        }
      />
       <Banner
                       before={<Avatar size={40}> <Icon28GameOutline /> </Avatar> }

        header="Инопланетный компьютер"
        subheader={`+0.0025/сек. • Цена: ${props.mine5} `}
       
        actions={
          <React.Fragment>          <br/> 

            <Button mode="commerce" onClick={props.buyAuto5}>Купить</Button>
            
          </React.Fragment>
        }
      />
       <Banner
                       before={<Avatar size={40}> <Icon28GameOutline /> </Avatar> }

        header="Компьютерная сеть"
        subheader={`+0.0050/сек. • Цена: ${props.mine6} `}
       
        actions={
          <React.Fragment>          <br/> 

            <Button mode="commerce" onClick={props.buyAuto6}>Купить</Button>
            
          </React.Fragment>
        }
      />
       <Banner
                       before={<Avatar size={40}> <Icon28GameOutline /> </Avatar> }

        header="Компьютер Билла Гейтса"
        subheader={`+0.0075/сек. • Цена: ${props.mine7} `}
       
        actions={
          <React.Fragment>          <br/> 

            <Button mode="commerce" onClick={props.buyAuto7}>Купить</Button>
            
          </React.Fragment>
        }
      />
       <Banner
                       before={<Avatar size={40}> <Icon28GameOutline /> </Avatar> }

        header="Майнеры"
        subheader={`+0.0500/сек. • Цена: ${props.mine8} Эм. `}
       
        actions={
          <React.Fragment>          <br/> 

            <Button mode="commerce" onClick={props.buyAuto8}>Купить</Button>
            
          </React.Fragment>
        }
      />
       <Banner
                       before={<Avatar size={40}> <Icon28GameOutline /> </Avatar> }

        header="Майнинг-ферма"
        subheader={`+0.1200/сек. • Цена: ${props.mine9} Эм. `}
       
        actions={
          <React.Fragment>
          <br/> 
            <Button mode="commerce" onClick={props.buyAuto9}>Купить</Button>
            
          </React.Fragment>
        }
      />
   </Group>
<Group header={<Header mode="secondary">Другое</Header>}>
<Banner
                       before={<Avatar size={40}> <Icon28UserOutline /> </Avatar> }

        header="Опыт"
        subheader={`+10 ES • Цена: 5 Эм. `}
       
        actions={
          <React.Fragment>
          <br/> 
            <Button mode="commerce" onClick={props.buyAuto10}>Купить</Button>
            
          </React.Fragment>
        }
      />
<Banner
                       before={<Avatar size={40}> <Icon28GiftOutline /> </Avatar> }

        header="Контейнер"
        subheader={`Цена: 10 ES `}
       
        actions={
          <React.Fragment>
          <br/> 
            <Button mode="commerce" onClick={props.buyContainer}>Купить</Button>
            
          </React.Fragment>
        }
      />
</Group>
  </Panel>
);

Shop.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};
export default Shop;
