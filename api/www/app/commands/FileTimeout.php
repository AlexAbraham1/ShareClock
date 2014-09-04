<?php

use Illuminate\Console\Command;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputArgument;
use Models\File;

class FileTimeout extends Command {

	/**
	 * The console command name.
	 *
	 * @var string
	 */
	protected $name = 'file-timeout';

	/**
	 * The console command description.
	 *
	 * @var string
	 */
	protected $description = 'Command used to delete files after a certain timeout period.';

	/**
	 * Create a new command instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		parent::__construct();
	}

	/**
	 * Execute the console command.
	 *
	 * @return mixed
	 */
	public function fire()
	{
		$files = File::where('timeout', '<', Carbon::now())->get();

		foreach ($files as $file) {
			$file->deleteFile($file->id);
		}
	}

	

}
