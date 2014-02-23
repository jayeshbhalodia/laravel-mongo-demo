<?php

class TestController extends BaseController {

    /**
     * Post data
     *
     * @todo need make validation rules
     * @route api/network
     */
    public function postData() {
    	
        $formData = Input::all();        

    	if(!empty($formData)){
    		
            $finalData = array('uid' => $formData['userid']);
    		$networkData = array();
    		$networkHostData = array();
    		$count = 0;

            foreach ($formData['networkArr'] as $data) {
            	$networkData[$count] = $data;
            	$count++;
            }

            $count = 0;
            foreach ($formData['networkHostArr'] as $data) {
            	$networkHostData[$count] = $data;
            	$count++;
            }

            $finalData['networkArr'] = $networkData;
            $finalData['networkHostArr'] = $networkHostData;            
            $status = Networkaccess::insert($finalData);            
        }
    		
    }

    /**
     * Get Data
     * @route api/network/{id}
     */
    public function getAllData() {
        $networkAnalytics = Networkaccess::orderBy('timestamp', 'asc')->get();
        return Response::json($networkAnalytics)->setCallback(Input::get('callback'));        
    }

    /**
     * Delete Data
     * @route api/network/{userId}/delete
     */
    public function getDeleteData($userId) {
        $status = Networkaccess::where ('_id', $userId)->delete();
        return Response::json(0);
    }

    /**
     * get Specific record
     */
    public function getData($id) {
        $networkAnalytics = Networkaccess::orderBy('timestamp', 'asc')->where('_id', $id)->first();
        return Response::json($networkAnalytics)->setCallback(Input::get('callback'));
    }

    /**
     * Edit data
     * @route api/network/{id}
     */
    public function postEdit($id) {
        
        $formData = Input::all();

        if(!empty($formData)){

            $finalData = array('uid' => $formData['userid']);
            $networkData = array();
            $networkHostData = array();
            $count = 0;
            foreach ($formData['networkArr'] as $data) {
                $networkData[$count] = $data;
                $count++;
            }
            $count = 0;
            foreach ($formData['networkHostArr'] as $data) {
                $networkHostData[$count] = $data;
                $count++;
            }
            $finalData['networkArr'] = $networkData;
            $finalData['networkHostArr'] = $networkHostData;
            
            $status = Networkaccess::where('_id',$id)->update($finalData);            
        }    
    }
}