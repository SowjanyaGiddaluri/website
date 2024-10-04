import './../TabItem/TabItem.css';

const TabItem = ({ tabDetails, clickTabItem, isActive }) => {
    const { tabId, displayText } = tabDetails;

    const onClickTabItem = () => {
        clickTabItem(tabId);
    };
    
    const activeTabBtnClassName = isActive ? 'active-tab-btn' : '';

    return (
        <li>
            <button
                type="button"
                className={`tab-btn ${activeTabBtnClassName}`}
                onClick={onClickTabItem}
            >
                {displayText}
            </button>
        </li>
    );
};

export default TabItem;
