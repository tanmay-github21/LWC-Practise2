@isTest
Class TvRemoteControl_Test {
    @isTest static void testVolumeIncrease()
    {
        TvRemoteControll trc= new TvRemoteControll(10);
        Integer newVolume=trc.increaseVolume(30);
        System.assertEquals(40,newVolume, 'The Method Didn\'t Return The Expected Result'); 
    }

    @isTest static void testVolumeIncreaseMax()
    {
        TvRemoteControll trc= new TvRemoteControll(10);
        Integer newVolume=trc.increaseVolume(100);
        System.assertEquals(100, newVolume, 'The Method Didn\'t Return The Expected Result');
    }

    @isTest static void testVolumeDecrease()
    {
        TvRemoteControll trc= new TvRemoteControll(50);
        Integer newVolume=trc.decreaseVolume(60);
        System.assertEquals(0, newVolume); 
    }

  
}