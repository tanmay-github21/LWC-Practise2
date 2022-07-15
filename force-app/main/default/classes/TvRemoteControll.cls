public with sharing class TvRemoteControll {
    integer volume; 
    static final Integer max_Volume=100; 
    public TvRemoteControll(Integer userVolume) {
         volume=userVolume;
    }

    public Integer increaseVolume(Integer amount)
    {
        volume+=amount; 
        if(volume >max_Volume)
        volume= max_Volume;
        return volume;
    }

    public Integer decreaseVolume(Integer amount)
    {
        volume-=amount;
        if(volume<0)
        volume=0;
        return volume; 
    }

    public static String getTv_Options()
    {
        return 'Audio Settings -- Video Settings'; 
    }
}