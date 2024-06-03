<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class GenerateControllers extends Command
{
    protected $signature = 'generate:controllers';
    
    protected $description = 'Generate controllers for all models';
    
    public function handle()
    {
        $modelsPath = app_path('Models');
        $models = File::files($modelsPath);
        
        foreach ($models as $model) {
            $modelName = pathinfo($model)['filename'];
            $controllerName = $modelName . 'Controller';
            
            $this->call('make:controller', [
                'name' => $controllerName,
                '--resource' => true,
            ]);
        }
    }
}
