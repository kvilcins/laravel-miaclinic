<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Integration
 * 
 * @property int $id
 * @property bool $active
 * @property string $type
 * @property string $config
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class Integration extends Model
{
	protected $table = 'integrations';

	protected $casts = [
		'active' => 'bool'
	];

	protected $fillable = [
		'active',
		'type',
		'config'
	];
}
