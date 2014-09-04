<?php

class DeleteFileQueueController extends BaseController {

	public function __construct(DeleteFileQueueRepository $queue)
	{
		$this->queue = $queue;
	}

	public function test()
	{
		$header = Request::header('x-valid-header');

		if ($header == 'sodascan') {
			return "You are scanning from the SodaScan app";
		} else {
			return "Please scan from the SodaScan app";
		}

		// die(var_dump(Request::header()));  //USE THIS TO GET ALL REQUEST HEADERS
	}


}
