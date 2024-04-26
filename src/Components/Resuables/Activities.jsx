import { Icon } from '@iconify/react';
import { GoBook } from 'react-icons/go';
import { TbBallVolleyball } from 'react-icons/tb';

const Activities = ({ text, icon }) => {
  const selectIcon = (type) => {
    if (type === 'book') return <GoBook size={32} />;
    if (type === 'volley') return <TbBallVolleyball size={32} />;
    if (type === 'running')
      return <Icon icon="solar:running-bold" width={48} />;
    if (type === 'photo') return <Icon icon="clarity:camera-line" width={48} />;
    if (type === 'project')
      return <Icon icon="arcticons:projectm" width={48} />;
    if (type === 'church') return <Icon icon="ph:church-light" width={48} />;
    if (type === 'football') return <Icon icon="bx:football" width={48} />;
    if (type === 'swim') return <Icon icon="uil:swimmer" width={48} />;
    if (type === 'sport')
      return <Icon icon="fluent:sport-20-regular" width={48} />;
    if (type === 'hangout')
      return <Icon icon="arcticons:tesco-clubcard" width={48} />;
    if (type === 'cow')
      return <Icon icon="healthicons:animal-cow-outline" width={48} />;
    if (type === 'plant') return <Icon icon="mdi:plant-outline" width={48} />;
    if (type === 'farm') return <Icon icon="iconoir:farm" width={48} />;
    if (type === 'food') return <Icon icon="ep:food" width={48} />;
    if (type === 'research')
      return <Icon icon="game-icons:archive-research" width={48} />;
    if (type === 'cook')
      return <Icon icon="solar:chef-hat-linear" width={48} />;
    if (type === 'disc')
      return <Icon icon="iconamoon:discover-thin" width={48} />;
    if (type === 'community')
      return <Icon icon="maki:residential-community" width={48} />;
    if (type === 'travel')
      return <Icon icon="healthicons:travel-alt-outline" width={48} />;
    if (type === 'aid') return <Icon icon="bx:first-aid" width={48} />;
    if (type === "nature") return <Icon icon="mdi:flower-lotus-outline" width={48} />
    if (type === "sight") return <Icon icon="carbon:ibm-watson-discovery" width={48} />
  };

  return (
    <div className="bg-[#F5FFF6] w-[240px] h-[120px] flex flex-col items-center justify-center px-2">
      {selectIcon(icon)}
      <p className="text-[#011717] text-center text-[14px]">{text}</p>
    </div>
  );
};

export default Activities;
